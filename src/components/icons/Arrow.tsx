import * as React from 'react'

export const Arrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="46"
    height="38"
    fill="none"
    viewBox="0 0 46 38"
    {...props}
  >
    <path
      stroke="#C0B7E8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M43.833 19H2.167m41.666 0L27.167 35.667M43.833 19 27.167 2.333"
    ></path>
  </svg>
)
