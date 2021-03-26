import React from 'react'
import BlogPost_card from '../components/BlogPost_card'
import PostItem from '../components/PostItem'
import PostItemData from '../Data/blogDetail_Data'
import blogCardData from '../Data/blogRightSidebar_Data'

const BlogPost = () => {
    return(
        <>
        <section id="blog-with-sidebar">
    <div className="container">
      <h3 className="d-none">heading</h3>
      <div className="col-lg-12 col-md-12 col-xs-12">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 posts">
            <BlogPost_card
                src = {blogCardData[0].src}
                blogHeading = {blogCardData[0].blogHeading}
            />
            <BlogPost_card
                src = {blogCardData[1].src}
                blogHeading = {blogCardData[1].blogHeading}
            />
            <BlogPost_card
                src = {blogCardData[2].src}
                blogHeading = {blogCardData[2].blogHeading}
            />
            <BlogPost_card
                src = {blogCardData[3].src}
                blogHeading = {blogCardData[3].blogHeading}
            />
            <BlogPost_card
                src = {blogCardData[4].src}
                blogHeading = {blogCardData[4].blogHeading}
            />
            <BlogPost_card
                src = {blogCardData[5].src}
                blogHeading = {blogCardData[5].blogHeading}
            />
            
            
            
            
            
        
          </div>
          <aside className="col-lg-3 col-md-3 col-sm-12 col-xs-12 sidebar right">
            <div className="widget">
              <div className="sidebar_heading">
                <h5>Search</h5>
                <div className="separator left-align ">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="widget-content">
              <div className="search">
                <form action="https://wpshopmart.com/index.html">
                  <div className="form-group">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"> <i className="flat flaticon-search"></i> </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
            <div className="widget">
              <div className="sidebar_heading">
                <h5>Recent Posts</h5>
                <div className="separator left-align ">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="widget-content">
                <PostItem
                    src = {PostItemData[0].src}
                    PostItemContent = {PostItemData[0].PostItemContent}
                />
                <PostItem
                    src = {PostItemData[1].src}
                    PostItemContent = {PostItemData[1].PostItemContent}
                />
                <PostItem
                    src = {PostItemData[2].src}
                    PostItemContent = {PostItemData[2].PostItemContent}
                />
                
                
              </div>
            </div>
            <div className="widget">
              <div className="sidebar_heading">
                <h5>Tags</h5>
                <div className="separator left-align ">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="widget-content">
                <div className="tags">
                  <ul>
                    <li><a href="javascript:void(0)" title="Bootstrap">Bootstrap</a></li>
                    <li><a href="javascript:void(0)" title="HTML">HTML</a></li>
                    <li><a href="javascript:void(0)" title="CSS">CSS</a></li>
                    <li><a href="javascript:void(0)" title="Jquery">Jquery</a></li>
                    <li><a href="javascript:void(0)" title="Web Development">Web Development</a></li>
                    <li><a href="javascript:void(0)" title="Creative">Creative</a></li>
                    <li><a href="javascript:void(0)" title="HTML">HTML</a></li>
                    <li><a href="javascript:void(0)" title="CSS">CSS</a></li>
                  </ul>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="widget">
              <div className="sidebar_heading">
                <h5>Quick Connect</h5>
                <div className="separator left-align ">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="widget-content">
                <div className="quick-connect-form">
                  <form action="https://wpshopmart.com/index.html">
                    <div className="form-group">
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Phone No." />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                      <textarea placeholder="Message"></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit">Send Message <i className="flat flaticon-plane"></i></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </aside>
           
        </div>
<nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item disabled"> <a className="page-link" href="#" tabIndex="-1"><i className="flat flaticon-back"></i></a> </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"> <a className="page-link" href="#"><i className="flat flaticon-arrow"></i></a> </li>
        </ul>
      </nav>
      </div>
     
    </div>
  </section>
        </>
    )
}

export default BlogPost;