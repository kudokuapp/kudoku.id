import React from "react";
import Image from "next/image";

export default function SwiperItem({ imageSrc, imageAlt }) {
	return (
		<li className="swiper-item">
			<div id="small">
				<h4 className="text-primary text-xl font-bold mb-10">{imageAlt}</h4>
				<Image
					src={imageSrc}
					alt={imageAlt}
					className="swiper-img"
					draggable={false}
					height={500}
				/>
			</div>
			<div id="large" className="my-4">
				<Image
					src={imageSrc}
					alt={imageAlt}
					className="swiper-img"
					draggable={false}
				/>
			</div>
		</li>
	);
}
