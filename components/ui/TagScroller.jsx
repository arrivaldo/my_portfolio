"use client";
"use client";
import { useEffect } from 'react';
import './TagScroller.css';

const TagScroller = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tagScroller = document.querySelector(".tag-scroller");
    const tagList = tagScroller.querySelector(".tag-list");

    const addScrolling = () => {
      tagScroller.classList.add("scrolling");
      const scrollContent = Array.from(tagList.children);
      scrollContent.forEach((listItem) => {
        const clonedItem = listItem.cloneNode(true);
        clonedItem.setAttribute("aria-hidden", true);
        tagList.appendChild(clonedItem);
      });
      tagList.style.setProperty("--duration", (tagList.clientWidth / 100) + "s");
    };

    tagScroller.innerHTML = "";
    tagScroller.appendChild(tagList);
    addScrolling();
  }, []);

  return (
    <div className="tag-scrollers">
      <div className="tag-scroller">
        <ul className="tag-list">
          <li>Munich RE</li>
          <li>FEMSA</li>
          <li>CLARO 360</li>
          <li>MIRA</li>
          <li>Popular Bank</li>
          <li>Munich RE</li>
          <li>FEMSA</li>
          <li>CLARO 360</li>
          <li>MIRA</li>
          <li>Popular Bank</li>
          <li>Munich RE</li>
          <li>FEMSA</li>
          <li>CLARO 360</li>
          <li>MIRA</li>
          <li>Popular Bank</li>
          <li>Munich RE</li>
          <li>FEMSA</li>
          <li>CLARO 360</li>
          <li>MIRA</li>
          <li>Popular Bank</li>
          <li>Munich RE</li>
          <li>FEMSA</li>
          <li>CLARO 360</li>
          <li>MIRA</li>
          <li>Popular Bank</li>
          <li>Munich RE</li>
          <li>FEMSA</li>
          <li>CLARO 360</li>
          <li>MIRA</li>
          <li>Popular Bank</li>
        </ul>
      </div>
    </div>
  );
};

export default TagScroller;
