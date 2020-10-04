import React from "react";
import Style from "../styles/components/footer.module.scss";
import UtilStyles from "../styles/utils.module.scss";

export default function Footer() {
    return (
        <>
            <section
                className={`${UtilStyles.containerWithPadding} ${Style.footer}`}
            >
                <div></div>
                <div></div>
                <div></div>
            </section>
        </>
    );
}
