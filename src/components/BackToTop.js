import React, {useState, useEffect} from "react";

const BackToTop = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsShow(window.scrollY >= 300);
        };

        window.addEventListener('scroll', handleScroll);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return <a href="#" className={`btn btn-primary border-inner py-3 fs-4 back-to-top ${isShow ? "d-inline" : ""}`} onClick={handleClick}><i className="bi bi-arrow-up"></i></a>
}

export default BackToTop;