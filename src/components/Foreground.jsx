import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
	const ref = useRef(null);

	const data = [
		{
			desc: "This is the first document in our React Docs app.",
			fileSize: "0.9Mb",
			close: false,
			tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
		},
		{
			desc: "This is the second document in our React Docs app.",
			fileSize: "0.9Mb",
			close: true,
			tag: { isOpen: true, tagTitle: "Remove", tagColor: "blue" },
		},
		{
			desc: "This is the third document in our React Docs app.",
			fileSize: "0.9Mb",
			close: false,
			tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
		},
	];
	return (
		<div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-7 flex-wrap p-5">
			{data.map((item, index) => (
				<Card data={item} reference={ref} />
			))}
		</div>
	)
};

export default Foreground