import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

export default function SlideUpImages(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  const addAnimationClassToChildren = () => {
    if (isVisible) {
      return React.Children.map(props.children, child => (
        React.cloneElement(child, {
          className: `${child.props.className} slide-up-animation`,
        })
      ));
    }
    return props.children;
  };

  return (
    <div ref={domRef}>
      {addAnimationClassToChildren()}
    </div>
  );
}

SlideUpImages.propTypes = {
  children: PropTypes.node.isRequired,
};
