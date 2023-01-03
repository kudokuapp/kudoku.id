import { useContext, createContext, useEffect, useState } from 'react';
import { signInWithPopup, onAuthStateChanged, signOut, TwitterAuthProvider } from 'firebase/auth';
import type { UserInfo } from 'firebase/auth';
import { auth } from '$utils/firebase';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface ContextType {
    user: UserInfo | undefined;
    kudos: number | null | undefined;
    twitterHandle: string;
    userTwitterToken: string | null;
    userTwitterSecret: string | null;
    twitterSignIn: () => Promise<void>;
    handleSignOut: () => void;
}

const AuthContext = createContext({} as ContextType);

export const AuthContextProvider = ({
    children,
}: {
    children:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal;
}) => {
    const [user, setUser] = useState({} as UserInfo | undefined);
    const [userTwitterToken, setUserTwitterToken] = useState<string | null>('');
    const [userTwitterSecret, setUserTwitterSecret] = useState<string | null>('');
    const [twitterHandle, setTwitterHandle] = useState('');
    const [kudos, setKudos] = useState<null | number>();

    const router = useRouter();

    const twitterSignIn = async () => {
        try {
            const provider = new TwitterAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const credential = TwitterAuthProvider.credentialFromResult(result);
            if (
                !credential ||
                credential.accessToken === undefined ||
                credential.secret === undefined
            ) {
                throw new Error('Error retrieving Twitter Credential');
            }
            setUserTwitterToken(credential.accessToken);
            setUserTwitterSecret(credential.secret);
            localStorage.setItem('twitterToken', credential.accessToken);
            localStorage.setItem('twitterSecret', credential.secret);
        } catch (e) {
            router.refresh();
            console.error(e);
        }
    };

    const handleSignOut = () => {
        signOut(auth);
    };

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser?.providerData[0]);
        });

        return () => {
            subscribe();
        };
    }, []);

    useEffect(() => {
        if (user) {
            if (Object.keys(user).length !== 0) {
                axios
                    .get('/api/getkudos', {
                        params: {
                            email: user.email,
                        },
                    })
                    .then((data) => setKudos(data.data.id))
                    .catch((err) => console.error(err));

                axios
                    .get('/api/twitter/gettwitterhandle', {
                        params: {
                            uid: user.uid,
                        },
                    })
                    .then((data) => setTwitterHandle(data.data.data.username))
                    .catch((err) => console.error(err));
            }

            if (localStorage.getItem('twitterToken') || localStorage.getItem('twitterSecret')) {
                setUserTwitterToken(localStorage.getItem('twitterToken'));
                setUserTwitterSecret(localStorage.getItem('twitterSecret'));
            }
        }
    }, [user]);

    return (
        <AuthContext.Provider
            value={{
                user,
                kudos,
                twitterHandle,
                userTwitterToken,
                userTwitterSecret,
                twitterSignIn,
                handleSignOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
