
function Video({ content, title, videoSrc, left }) {

    const marginLeft = left ? 'ml-10 mb-10 lg:mr-4' : 'ml-10 mt-10';
    const colorLeft = left ? 'bg-white' : 'bg-bkg-light';

    return (
        <>
            <div className={`grid grid-cols-12 items-stretch gap-8 ${colorLeft}`}>
                <div className={`self-center col-span-12 lg:col-span-5 ${marginLeft}`}>
                    <h3 className="font-semibold mb-8">
                        {title}
                    </h3>
                    <p className="mb-6">
                        {content}
                    </p>
                </div>
                <div className={`p-10 col-span-12 h-96 sm:h-[32rem] lg:col-span-7 ${left && 'order-first'}`}>
                    <iframe
                        src={videoSrc}
                        className="size-full"
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default Video
