import gsap from "gsap";
import { useEffect, useState } from "react";

const HandleScroll = () => {

	const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY; // Current scroll position
		let isScrolling;
		const styles = window.getComputedStyle(document.querySelector('.generalRadius'));
    const borderRadius = styles.borderRadius;
		const tl = gsap.timeline({ paused:true });
		gsap.to('.generalRadius', {
			borderRadius: '70px',
			scale: 1.02,
			duration: .8,
			ease: 'sine.out',
		})

		// Reset the scroll flag after the next frame
		requestAnimationFrame(() => {
			setTimeout(() => {
				gsap.to('.generalRadius', {
					borderRadius: '50px',
					scale: 1,
					duration: .3,
					ease: 'sine.out',
				})
				isScrolling = false;
			}, 800); // Wait for 200ms of no scroll before resetting
		});
    setScrollPosition(position);
  };


	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
	},[])

	return (
		<></>
	 );
}

export default HandleScroll;
