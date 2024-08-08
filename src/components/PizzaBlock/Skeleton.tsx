import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="249" rx="10" ry="10" width="240" height="25" /> 
    <rect x="0" y="291" rx="10" ry="10" width="240" height="40" /> 
    <rect x="100" y="340" rx="17" ry="17" width="140" height="35" /> 
    <rect x="0" y="348" rx="10" ry="10" width="80" height="20" /> 
    <rect x="0" y="0" rx="10" ry="10" width="240" height="240" />
  </ContentLoader>
)

export default Skeleton