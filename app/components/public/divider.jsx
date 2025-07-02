const Divider = () => {
    return (
        <div className="flex items-center justify-center my-10">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 w-3 h-3 rounded-full border border-gray-300 bg-white" />
            <div className="flex-grow border-t border-gray-200"></div>
        </div>
    );
};

export { Divider };
