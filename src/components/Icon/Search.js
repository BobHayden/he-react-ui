// @flow
import React from 'react';

type Props = { className?: string };

export default function Search(props: Props) {
  const { className, ...restProps } = props;

  return (
    <svg
      className={className}
      {...restProps}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(2.000000, 2.000000)">
        <path d="M13.3790003,14.8450464 C10.1255431,17.3770656 5.41947884,17.1478478 2.42902464,14.1573927 C-0.809674908,10.918692 -0.809674908,5.66772474 2.42902481,2.42902475 C5.66772468,-0.80967484 10.9186918,-0.8096749 14.1573925,2.42902447 C17.1478478,5.41947883 17.3770656,10.1255431 14.8450464,13.3790003 L19.6963719,18.2303258 C20.1012094,18.6351632 20.1012094,19.2915345 19.6963719,19.6963719 C19.2915345,20.1012094 18.6351632,20.1012094 18.2303258,19.6963719 L13.3790003,14.8450464 Z M3.89507093,3.89507087 C1.46604607,6.32409593 1.46604607,10.262321 3.895071,12.6913468 C6.32409603,15.1203726 10.2623209,15.1203726 12.6913467,12.6913467 C15.1203726,10.2623209 15.1203726,6.32409604 12.6913468,3.89507101 C10.262321,1.46604608 6.32409592,1.46604609 3.89507093,3.89507087 Z" />
      </g>
    </svg>
  );
}
