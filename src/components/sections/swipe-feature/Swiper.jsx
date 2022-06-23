import React, { useState, useRef } from 'react';
import { getRefValue, useStateRef } from '../../../core/lib/hooks';
import { getTouchEventData } from '../../../core/lib/dom';
import SwiperItem from './SwiperItem';


const MIN_SWIPE_REQUIRED = 40;

function Swiper({ items }) {
  const containerRef = useRef(null);
  const containerWidthRef = useRef(0);
  const minOffsetXRef = useRef(0);
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const minOffsetYRef = useRef(0);
  const currentOffsetYRef = useRef(0);
  const startYRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const onTouchMove = (e) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = getRefValue(currentOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) {
      newOffsetX = maxOffsetX;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    setOffsetX(newOffsetX);
  };
  const onTouchEnd = () => {
    const currentOffsetX = getRefValue(currentOffsetXRef);
    const containerWidth = getRefValue(containerWidthRef);
    let newOffsetX = getRefValue(offsetXRef);

    const diff = currentOffsetX - newOffsetX;

    // we need to check difference in absolute/positive value (if diff is more than 40px)
    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        // swipe to the right if diff is positive
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        // swipe to the left if diff is negative
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    } else {
      // remain in the current image
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
    }

    setIsSwiping(false);
    setOffsetX(newOffsetX);
    setCurrentIdx(Math.abs(newOffsetX / containerWidth));

    window.removeEventListener('touchend', onTouchEnd);
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('mouseup', onTouchEnd);
    window.removeEventListener('mousemove', onTouchMove);
  };
  const onTouchStart = (
    e
  ) => {
    setIsSwiping(true);

    currentOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = getTouchEventData(e).clientX;

    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    containerWidthRef.current = containerWidth;
    minOffsetXRef.current = containerWidth - containerEl.scrollWidth;

    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('mousemove', onTouchMove);
    window.addEventListener('mouseup', onTouchEnd);
  };
  const indicatorOnClick = (idx) => {
    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    setCurrentIdx(idx);
    setOffsetX(-(containerWidth * idx));
  };

  return (
    <div className="lg:m-6 flex relative flex-row h-screen">

      <div className="slider">

          <div className="slides">

              <div id="slide-1" >

                <div
                  className="swiper-container mx-8 h-full py-14"
                  onTouchStart={onTouchStart}
                  onMouseDown={onTouchStart}
                  id="small"
                >
                  <ul
                    ref={containerRef}
                    className={`swiper-list ${isSwiping ? 'is-swiping' : ''}`}
                    style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
                  >
                    {items.map((item, idx) => (
                      <SwiperItem key={idx} {...item} />
                    ))}
                  </ul>
                  <ul className="swiper-indicator mt-8">
                    {items.map((_item, idx) => (
                      <li
                        key={idx}
                        className={`swiper-indicator-item ${
                          currentIdx === idx ? 'active' : ''
                        }`}
                        onClick={() => indicatorOnClick(idx)}
                        data-testid="indicator"
                      />
                    ))}
                  </ul>
                </div>
                <div
                  className="swiper-container flex flex-row w-full mx-8 h-full py-14"
                  id="large"
                >
                  <ul className="swiper-indicator flex-col w-1/2">
                    {items.map((_item, idx) => (
                      <li
                        key={idx}
                        className={`swiper-indicator-item-large ${
                          currentIdx === idx ? 'active' : ''
                        }`}
                        onClick={() => indicatorOnClick(idx)}
                        data-testid="indicator"
                      >{_item.imageAlt}</li>
                    ))}
                  </ul>
                  <ul
                    ref={containerRef}
                    className={`swiper-list-large ${isSwiping ? 'is-swiping' : ''}`}
                    style={{ transform: `translate3d(0, ${offsetX}px, 0)` }}
                  >
                    {items.map((item, idx) => (
                      <SwiperItem key={idx} {...item} />
                    ))}
                  </ul>
                </div>

              </div>

          </div>

      </div>
    </div>
  );
}

export default Swiper;