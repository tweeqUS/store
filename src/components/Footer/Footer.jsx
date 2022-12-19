import React from "react";
import s from './Footer.module.css'
import img from './img/footer_img.png'

const Footer = () => {
    return (
        <div className={s.footer}>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil rem eaque nobis, officia ipsam distinctio, quos illum quam vel fuga voluptate. Recusandae impedit consequuntur amet laborum magnam aliquam tenetur! Consequuntur in, quisquam autem delectus, facilis aut labore deserunt non veniam et tempora obcaecati! Eum voluptates assumenda ut doloremque quaerat nihil?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, dolor? Quae est architecto rem numquam odio sed reiciendis a atque, neque veritatis dolor dicta iure blanditiis. Magnam eveniet harum, sequi asperiores porro ab dolores temporibus molestias maiores ex veniam minima repudiandae molestiae beatae saepe accusantium est dicta soluta omnis! Earum.</p>
            <img src={img} alt="img" />
        </div>
    )
}

export default Footer;