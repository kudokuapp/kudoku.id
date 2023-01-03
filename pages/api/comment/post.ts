import pool from '$utils/database';
import type { NextApiRequest, NextApiResponse } from 'next';

interface FormData {
    parentId?: string;
    email: string;
    fullName: string;
    kudosNo: string;
    text: string;
    imageURL: string;
    date: Date;
    twitterHandle: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data: FormData = req.body;
    const { email, fullName, kudosNo, text, imageURL, date, twitterHandle, parentId } = data;

    try {
        if (parentId) {
            const response = await dbQueryReply({
                parentId,
                email,
                twitterHandle,
                fullName,
                kudosNo,
                text,
                date,
                imageURL,
            });
            res.status(200).send(response);
        } else {
            const response = await dbQuery({
                email,
                twitterHandle,
                fullName,
                kudosNo,
                text,
                date,
                imageURL,
            });
            res.status(200).send(response);
        }
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
}

const dbQuery = async ({
    email,
    twitterHandle,
    fullName,
    kudosNo,
    text,
    date,
    imageURL,
}: FormData) => {
    const queryString = `INSERT INTO website_comments(email, twitterhandle, fullname, kudosno, comment, commentdate, imagesrc) VALUES($1, $2, $3, $4, $5, $6, $7)`;

    const arr = [email, twitterHandle, fullName, kudosNo, text, date, imageURL];

    return new Promise((reject, resolve) => {
        pool.query(queryString, arr, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};

const dbQueryReply = async ({
    parentId,
    email,
    twitterHandle,
    fullName,
    kudosNo,
    text,
    date,
    imageURL,
}: FormData) => {
    const queryString = `INSERT INTO website_comments(parentid, email, twitterhandle, fullname, kudosno, comment, commentdate, imagesrc) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`;

    const arr = [parentId, email, twitterHandle, fullName, kudosNo, text, date, imageURL];

    return new Promise((reject, resolve) => {
        pool.query(queryString, arr, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};
