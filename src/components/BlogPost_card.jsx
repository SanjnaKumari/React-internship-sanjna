import React from 'react'

const BlogPost_card = ({src,blogHeading}) => {
    return (
        <>
        <div className="item blog_card card_mr_bt d-flex">
                <div className="post-img"><img src={src} alt="Post"/></div>
                <div className="post-detail">
                    <h5><a href="blog-detail.html">{blogHeading}</a>
                    </h5>
                    <div className="post-status">
                        <ul>
                            <li><i className="flat flaticon-folder"></i> <span><a
                                href="javascript:void(0)">UI Developer</a></span></li>
                            <li><i className="flat flaticon-chat"></i> <span>20</span></li>
                            <li><i className="flat flaticon-calendar"></i> <span>05/10/2018</span>
                            </li>
                        </ul>
                    </div>
                    <div className="description">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry.</p>
                        <a href="blog-detail.html" title="View More">View More</a></div>
                </div>
                <div className="clearfix"></div>
            </div>
        </>

    )
}

export default BlogPost_card;