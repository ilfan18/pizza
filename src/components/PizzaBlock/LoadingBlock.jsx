import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={260}
    height={460}
    viewBox='0 0 260 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='130' cy='130' r='130' />
    <rect x='0' y='280' rx='5' ry='5' width='260' height='26' />
    <rect x='123' y='377' rx='0' ry='0' width='1' height='0' />
    <rect x='0' y='322' rx='10' ry='10' width='260' height='84' />
    <rect x='0' y='420' rx='17' ry='17' width='90' height='37' />
    <rect x='110' y='420' rx='17' ry='17' width='139' height='37' />
  </ContentLoader>
);

export default LoadingBlock;
