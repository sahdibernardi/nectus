import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

export default function SlideRightSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`slide-right-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

SlideRightSection.propTypes = {
  children: PropTypes.node.isRequired,
};