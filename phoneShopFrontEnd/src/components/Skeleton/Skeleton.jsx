import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={225}
    height={500}
    viewBox="0 0 225 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="1" rx="0" ry="0" width="220" height="254" /> 
    <rect x="34" y="278" rx="10" ry="10" width="142" height="21" /> 
    <rect x="83" y="313" rx="10" ry="10" width="50" height="21" /> 
    <rect x="85" y="352" rx="10" ry="10" width="48" height="23" /> 
    <rect x="32" y="387" rx="10" ry="10" width="150" height="27" />
  </ContentLoader>
)

export default Skeleton;

