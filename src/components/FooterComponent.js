import React, { Component } from "react";




class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="footer bg-light">
                <div className="container py-4">
                    {/* Footer 1 */}
                    <div className="row d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="col-md-6 me-5 d-none d-lg-block">
                            <span>Liên kết với Funix qua các phương tiện Social:</span>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-2 col-md-2">
                                    <a href="/" className="me-4 text-reset">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                </div>

                                <div className="col-2 col-md-2">
                                    <a href="/" className="me-4 text-reset">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </div>

                                <div className="col-2 col-md-2">
                                    <a href="/" className="me-4 text-reset">
                                        <i className="fa fa-github"></i>
                                    </a>
                                </div>

                                <div className="col-2 col-md-2">
                                    <a href="/" className="me-4 text-reset">
                                        <i className="fa fa-google"></i>
                                    </a>
                                </div>

                                <div className="col-2 col-md-2">
                                    <a href="/" className="me-4 text-reset">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>

                                <div className="col-2 col-md-2">
                                    <a href="/" className="me-4 text-reset">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-4  mx-auto mb-4 ">

                            <h6 className="text-uppercase font-weight-bold mb-4">
                                <i className="fa fa-graduation-cap me-3"></i> Funix education
                            </h6>
                            <p>
                                Bài Assignment 02 môn React JS của học viên <strong>Quân Lê Bá</strong>.
                            </p>
                            <p>
                                Mã số  FX12493 hiện đang học khóa Doanh nghiệp tài trợ của FUNIX
                            </p>
                        </div>



                        <div className="col-md-4  mx-auto mb-4">

                            <h6 className="text-uppercase font-weight-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>



                        



                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fa fa-home me-3"></i> New York, NY 10012, US</p>
                            
                            <p>
                                <i className="fa fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fa fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print me-3"></i> + 01 234 567 89</p>
                        </div>

                    </div>

                </div>

                {/* Footer 2 */}
                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2021 Copyright:
                    <a target='_blank' rel="noopener noreferrer" className="text-reset font-weight-bold" href="https://www.facebook.com/thaydoisomenh/"> QUANLBFX12493</a>
                </div>
            </div>
        );
    }
}

export default Footer;