function BackgroundText({ text }) {
    return (
        <h2
            className="select-none absolute uppercase lg:text-[250px] text-6xl opacity-20 -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold "
            style={{ color: "#1b1919", textShadow: "-1px -1px 0 #ffffff5c, 1px -1px 0 #ffffff00, 1px 1px 0 #ffffff52, 1px 1px 0 #ffffff00" }}
        >
            {text}
        </h2>
    );
}

export default BackgroundText;
