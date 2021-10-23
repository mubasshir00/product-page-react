import React, { useState } from 'react'
import './Content.css'
import { productsData } from './productsData';
import Pricebox from './Pricebox'
import Description from './Description'
import Lists from './Lists'
import Reviews from './Reviews'
import {FaHeart} from 'react-icons/fa'
import {MdCollections} from 'react-icons/md'
import {VscPreview} from 'react-icons/vsc'
import {FaStar,FaRegStar} from 'react-icons/fa'
import Faq from './Faq';
import Techused from './Techused';

const Content = () => {

    const ratingTotoal = productsData.reviewsData.map(item=>item.rating).reduce((prev,curr)=>prev+curr,0)
const ratingAv = Math.round(ratingTotoal / productsData.reviewsData.length);

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

    return (
      <>
        <div className="content">
          <div className="contentContainer">
            <div className="contentHeader">
              <h1>{productsData.product}</h1>
              <div className="contentItemSection">
                <div className="ratingContent">
                  <div className="ratingStar">
                    <div className="positive">
                      {Array(5 + ratingAv - 5)
                        .fill()
                        .map((_, i) => (
                          <p>
                            <FaStar />
                          </p>
                        ))}
                    </div>
                    <div className="negative">
                      {Array(5 - ratingAv)
                        .fill()
                        .map((_, i) => (
                          <p>
                            <FaRegStar />
                          </p>
                        ))}
                    </div>
                  </div>
                  <p className="rating">
                    {5 + ratingAv - 5} ({productsData.reviewsData.length}{" "}
                    ratings)
                  </p>
                </div>

                <div className="highlightContainer">
                  <div className="highlightContent">
                    <strong>Recently Updated</strong>

                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 14 14"
                      class="svgIcon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-labelledby="title"
                      role="img"
                    >
                      <title></title>

                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.333252 7.00004C0.333252 3.31814 3.31802 0.333374 6.99992 0.333374C8.76803 0.333374 10.4637 1.03575 11.714 2.286C12.9642 3.53624 13.6666 5.23193 13.6666 7.00004C13.6666 10.6819 10.6818 13.6667 6.99992 13.6667C3.31802 13.6667 0.333252 10.6819 0.333252 7.00004ZM6.15326 9.23337L9.89993 5.48671C10.0227 5.35794 10.0227 5.15547 9.89993 5.02671L9.54659 4.67337C9.41698 4.54633 9.20954 4.54633 9.07993 4.67337L5.91993 7.83337L4.91993 6.84004C4.85944 6.77559 4.77498 6.73903 4.68659 6.73903C4.5982 6.73903 4.51375 6.77559 4.45326 6.84004L4.09993 7.19337C4.03682 7.25596 4.00133 7.34116 4.00133 7.43004C4.00133 7.51892 4.03682 7.60412 4.09993 7.66671L5.68659 9.23337C5.74708 9.29782 5.83154 9.33439 5.91993 9.33439C6.00832 9.33439 6.09277 9.29782 6.15326 9.23337Z"
                        fill="#79B530"
                      ></path>
                    </svg>
                  </div>

                  <div className="highlightContent">
                    <strong>Well Documented </strong>

                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 14 14"
                      class="svgIcon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-labelledby="title"
                      role="img"
                    >
                      <title></title>

                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.333252 7.00004C0.333252 3.31814 3.31802 0.333374 6.99992 0.333374C8.76803 0.333374 10.4637 1.03575 11.714 2.286C12.9642 3.53624 13.6666 5.23193 13.6666 7.00004C13.6666 10.6819 10.6818 13.6667 6.99992 13.6667C3.31802 13.6667 0.333252 10.6819 0.333252 7.00004ZM6.15326 9.23337L9.89993 5.48671C10.0227 5.35794 10.0227 5.15547 9.89993 5.02671L9.54659 4.67337C9.41698 4.54633 9.20954 4.54633 9.07993 4.67337L5.91993 7.83337L4.91993 6.84004C4.85944 6.77559 4.77498 6.73903 4.68659 6.73903C4.5982 6.73903 4.51375 6.77559 4.45326 6.84004L4.09993 7.19337C4.03682 7.25596 4.00133 7.34116 4.00133 7.43004C4.00133 7.51892 4.03682 7.60412 4.09993 7.66671L5.68659 9.23337C5.74708 9.29782 5.83154 9.33439 5.91993 9.33439C6.00832 9.33439 6.09277 9.29782 6.15326 9.23337Z"
                        fill="#79B530"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Item Details
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Reviews
              </button>
              <button 
                 className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                 onClick={()=>toggleTab(3)}
              >
                FAQ
              </button>
            </div>
          </div>
        </div>
        <div className="contentBody">
          <div className="contentBodyWrapper">
            <div className="gridContainer">
              <div className="left">
                <div
                  className={
                    toggleState === 1
                      ? "contentTab  active-content"
                      : " contentTab"
                  }
                >
                  <div className="previewContainer">
                    <div className="itemPreview">
                      <div className="imageContainer">
                        <img src={productsData.bannerImage} alt="" />

                        <div class="after">
                          <p>
                            {" "}
                            <VscPreview />
                            <br></br>
                            Preview Item
                          </p>
                        </div>
                      </div>

                      <div className="previewBtn">
                        <button className="btn">
                          <VscPreview />
                          <span>Preview Item</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <div className="itemBookmarking">
                    <div className="bookmarkingContainer">
                      <div className="bookmarkingContent">
                        <button>
                          <FaHeart />
                          <span>Add To Favorite</span>
                        </button>
                      </div>
                      <div className="bookmarkingContent">
                        <button>
                          <MdCollections />
                          <span> Add to Collection</span>
                        </button>
                      </div>
                    </div>
                  </div> */}

                  <div className="previewImg">
                    {productsData.imageData.map((item) => {
                      const { image } = item;
                      return <img src={image} alt="" />;
                    })}
                  </div>
                  <div className="descriptionContainer">
                    <Description
                      title={productsData.product}
                      description={productsData.description}
                    />
                    <Lists
                      data={productsData.listsOverview}
                      moreData={productsData.moreDetails}
                    />
                  </div>
                </div>
                <div
                  className={
                    toggleState === 2
                      ? "contentTab  active-content"
                      : "contentTab"
                  }
                >
                  <Reviews data={productsData.reviewsData} />
                </div>
                <div
                  className={
                    toggleState === 3
                      ? "contentTab  active-content"
                      : " contentTab"
                  }>
                  {/* <Faq data={productsData.faqData} /> */}
                  {
                    productsData.faqData.map((item)=>{
                      return <Faq 
                      {...item}
                      />
                    })
                  }
                </div>
              </div>

              <div className="right">
                <Pricebox />
                <Techused/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Content
