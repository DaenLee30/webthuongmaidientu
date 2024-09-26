import { memo, useState } from "react";
import "./style.scss";
import { AiOutlineFacebook, AiOutlineGlobal, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
    const [menus, setMenus] = useState ([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Thịt",
                    path: "",
                },
            ], 
        },
        {
            name: "Bài viết",
            path: ROUTERS.USER.HOME
        },
        {
            name: "Liên hệ",
            path: ROUTERS.USER.HOME,
        },
    ])

    return (
        <>
    <div className="header__top">
        <div className="container">
            <div className="row">
                <div className="col-6 header__top_left">
                <ul>
                    <li>hello@gmail.com</li>
                    <li>Miễn phí ship đơn từ 200.000đ</li>
                </ul>
                </div>
                <div className="col-6 header__top_right">
                <ul>
                <li>
                    <Link to={""}>
                    <AiOutlineFacebook/>
                    </Link>
                </li>
                <li>
                    <Link to={""}>
                    <AiOutlineInstagram/>
                    </Link>
                </li>
                <li>
                    <Link to={""}>
                    <AiOutlineLinkedin/>
                    </Link>
                </li>
                <li>
                    <Link to={""}>
                    <AiOutlineGlobal/>
                    </Link>
                </li>
                <li>
                    <Link to={""}>
                    <AiOutlineUser/>
                    </Link>
                    <span>Đăng nhập</span>
                </li>
                </ul>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                    <div className="header__logo">
                        <h1>VIETGAB</h1>
                    </div>
                </div>
                <div className="col-xl-6">
                    <nav className="header__menu">
                        <ul>
                            {
                                menus?.map((menu,menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu?.path}>{menu?.name}</Link>
                                    </li>
                                ))
                            }
                            {/* <li>Trang chủ</li>
                            <li>Trang chủ</li>
                            <li>
                                <Link to="">Sản phẩm</Link>
                                <ul>
                                    <li>Thịt</li>
                                    <li>Thịt</li>
                                    <li>Thịt</li>
                                </ul>
                            </li> */}
                        </ul>
                    </nav>
                </div>
                <div className="col-xl-3">
                    <div className="header__cart">
                        <div className="header__cart__price">
                            <span>{formatter(1001230)}</span>
                        </div>
                        <ul>
                            <li>
                                <Link to="#">
                                    <AiOutlineShoppingCart /> <span>$</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
        </>
    );
};

export default memo(Header);