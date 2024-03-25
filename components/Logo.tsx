interface Logo {
  title: string;
  description: string;
}

export default function Logo({ title, description }: Logo) {
  return (
    <svg
      width="143"
      height="142"
      viewBox="0 0 143 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-describedby="logo logo-description"
    >
      <title id="logo-title">{title}</title>
      <desc id="logo-description">{description}</desc>
      <path
        d="M42.3363 54L41.8243 48.752H41.5683C41.0563 49.5627 40.3736 50.3307 39.5203 51.056C38.6669 51.7813 37.7069 52.4213 36.6403 52.976C35.6163 53.5307 34.4856 53.9573 33.2483 54.256C32.0536 54.5973 30.8589 54.768 29.6643 54.768C26.8483 54.768 24.7363 53.9573 23.3283 52.336C21.9203 50.672 21.2163 48.6027 21.2163 46.128C21.2163 43.696 21.8349 41.7547 23.0723 40.304C24.3096 38.8533 25.8243 37.7653 27.6163 37.04C29.4083 36.3147 31.2856 35.8453 33.2483 35.632C35.2536 35.4187 37.0029 35.312 38.4963 35.312H41.3763V34.544C41.3763 32.9227 41.1416 31.6853 40.6723 30.832C40.2456 29.9787 39.6056 29.2533 38.7523 28.656C38.0269 28.1867 37.2376 27.8667 36.3843 27.696C35.5736 27.4827 34.4856 27.376 33.1203 27.376C31.3283 27.376 29.7496 27.6107 28.3843 28.08C27.0189 28.5493 25.6963 29.168 24.4163 29.936L23.3923 26.096C26.2509 24.432 29.6643 23.6 33.6323 23.6C35.2109 23.6 36.7043 23.7493 38.1123 24.048C39.5203 24.304 40.7576 24.7733 41.8243 25.456C43.0616 26.224 44.0429 27.312 44.7683 28.72C45.4936 30.128 45.8563 31.8773 45.8563 33.968V54H42.3363ZM31.0083 50.992C32.7576 50.992 34.6136 50.4373 36.5763 49.328C38.5389 48.2187 40.1389 46.6187 41.3763 44.528V38.576H40.8003C39.0509 38.576 37.3016 38.64 35.5522 38.768C33.8029 38.896 32.2029 39.216 30.7523 39.728C29.3443 40.24 28.1923 40.9867 27.2963 41.968C26.4003 42.9067 25.9523 44.208 25.9523 45.872C25.9523 47.536 26.4003 48.816 27.2963 49.712C28.2349 50.5653 29.4723 50.992 31.0083 50.992ZM110.1 54.256C109.46 55.6213 108.692 57.2213 107.796 59.056C106.9 60.9333 105.834 62.704 104.596 64.368C103.359 66.032 101.908 67.44 100.244 68.592C98.5803 69.7867 96.7029 70.384 94.6123 70.384C94.2709 70.384 94.0149 70.3627 93.8443 70.32C93.6736 70.32 93.4816 70.2773 93.2682 70.192L92.4363 65.968C92.5643 66.0107 92.7136 66.0533 92.8843 66.096C93.0549 66.1387 93.3536 66.16 93.7803 66.16C94.6336 66.16 95.4229 66.0747 96.1483 65.904C96.9163 65.7333 97.6629 65.392 98.3883 64.88C99.8816 63.8133 101.226 62.256 102.42 60.208C103.658 58.16 104.767 55.7707 105.748 53.04L91.0282 24.56H96.3403L108.052 49.072L118.548 24.56H123.604L110.1 54.256ZM34.836 98.568H29.908V96.2L34.964 95.56L35.924 86.664H39.316V95.56H46.228V98.568H39.316V118.984C39.316 120.349 39.508 121.245 39.892 121.672C40.3187 122.099 40.9587 122.312 41.812 122.312C42.7933 122.312 43.668 122.163 44.436 121.864C45.204 121.565 45.8867 121.203 46.484 120.776L47.38 124.168C46.6547 124.509 45.6947 124.851 44.5 125.192C43.348 125.533 42.068 125.704 40.66 125.704C39.2947 125.704 38.228 125.512 37.46 125.128C36.692 124.744 36.116 124.232 35.732 123.592C35.348 122.952 35.092 122.248 34.964 121.48C34.8787 120.669 34.836 119.88 34.836 119.112V98.568ZM72.2425 125L71.7305 119.752H71.4745C70.9625 120.563 70.2798 121.331 69.4265 122.056C68.5732 122.781 67.6132 123.421 66.5465 123.976C65.5225 124.531 64.3918 124.957 63.1545 125.256C61.9598 125.597 60.7652 125.768 59.5705 125.768C56.7545 125.768 54.6425 124.957 53.2345 123.336C51.8265 121.672 51.1225 119.603 51.1225 117.128C51.1225 114.696 51.7412 112.755 52.9785 111.304C54.2158 109.853 55.7305 108.765 57.5225 108.04C59.3145 107.315 61.1918 106.845 63.1545 106.632C65.1598 106.419 66.9092 106.312 68.4025 106.312H71.2825V105.544C71.2825 103.923 71.0478 102.685 70.5785 101.832C70.1518 100.979 69.5118 100.253 68.6585 99.656C67.9332 99.1867 67.1438 98.8667 66.2905 98.696C65.4798 98.4827 64.3918 98.376 63.0265 98.376C61.2345 98.376 59.6558 98.6107 58.2905 99.08C56.9252 99.5493 55.6025 100.168 54.3225 100.936L53.2985 97.096C56.1572 95.432 59.5705 94.6 63.5385 94.6C65.1172 94.6 66.6105 94.7493 68.0185 95.048C69.4265 95.304 70.6638 95.7733 71.7305 96.456C72.9678 97.224 73.9492 98.312 74.6745 99.72C75.3998 101.128 75.7625 102.877 75.7625 104.968V125H72.2425ZM60.9145 121.992C62.6638 121.992 64.5198 121.437 66.4825 120.328C68.4452 119.219 70.0452 117.619 71.2825 115.528V109.576H70.7065C68.9572 109.576 67.2078 109.64 65.4585 109.768C63.7092 109.896 62.1092 110.216 60.6585 110.728C59.2505 111.24 58.0985 111.987 57.2025 112.968C56.3065 113.907 55.8585 115.208 55.8585 116.872C55.8585 118.536 56.3065 119.816 57.2025 120.712C58.1412 121.565 59.3785 121.992 60.9145 121.992ZM108.406 100.936C107.424 100.211 106.016 99.5707 104.182 99.016C102.347 98.4187 100.512 98.12 98.6775 98.12C96.8002 98.12 95.2002 98.44 93.8775 99.08C92.5975 99.72 91.5308 100.573 90.6775 101.64C89.8242 102.707 89.2055 103.944 88.8215 105.352C88.4375 106.717 88.2455 108.147 88.2455 109.64C88.2455 111.304 88.4802 112.904 88.9495 114.44C89.4188 115.976 90.1015 117.32 90.9975 118.472C91.9362 119.624 93.0668 120.541 94.3895 121.224C95.7548 121.907 97.3335 122.248 99.1255 122.248C100.832 122.248 102.582 121.885 104.374 121.16C106.208 120.435 107.723 119.517 108.918 118.408L109.814 122.568C108.619 123.336 106.976 124.061 104.886 124.744C102.838 125.427 100.64 125.768 98.2935 125.768C95.8188 125.768 93.6428 125.341 91.7655 124.488C89.9308 123.635 88.3948 122.504 87.1575 121.096C85.9628 119.645 85.0455 117.981 84.4055 116.104C83.8082 114.184 83.5095 112.157 83.5095 110.024C83.5095 107.976 83.7868 106.035 84.3415 104.2C84.9388 102.323 85.8562 100.68 87.0935 99.272C88.3308 97.8213 89.9095 96.6907 91.8295 95.88C93.7495 95.0267 96.0535 94.6 98.7415 94.6C100.79 94.6 102.795 94.8347 104.758 95.304C106.72 95.7733 108.299 96.392 109.494 97.16L108.406 100.936Z"
        fill="#F0F0F0"
      />
      <path
        d="M64.4833 54H59.6833V20.336L53.5393 23.28L52.1313 18.8L64.4833 11.76V54ZM84.7958 54H79.9958V20.336L73.8518 23.28L72.4438 18.8L84.7958 11.76V54ZM13.882 98.184C11.834 98.184 10.3407 98.568 9.402 99.336C8.506 100.061 8.058 101.064 8.058 102.344C8.058 102.771 8.122 103.219 8.25 103.688C8.378 104.157 8.61267 104.605 8.954 105.032C9.338 105.416 9.82867 105.8 10.426 106.184C11.066 106.525 11.898 106.803 12.922 107.016L17.466 108.04C19.258 108.424 20.6873 108.957 21.754 109.64C22.8633 110.28 23.7167 110.984 24.314 111.752C24.9113 112.52 25.2953 113.309 25.466 114.12C25.6793 114.888 25.786 115.613 25.786 116.296C25.786 117.619 25.5087 118.856 24.954 120.008C24.442 121.16 23.674 122.163 22.65 123.016C21.6687 123.869 20.4527 124.531 19.002 125C17.5513 125.512 15.93 125.768 14.138 125.768C11.8767 125.768 9.786 125.448 7.866 124.808C5.946 124.125 4.41 123.379 3.258 122.568L4.41 118.408C5.946 119.816 7.65267 120.84 9.53 121.48C11.4073 122.12 13.0927 122.44 14.586 122.44C16.7193 122.44 18.3407 121.928 19.45 120.904C20.5593 119.837 21.114 118.728 21.114 117.576C21.114 117.192 21.0927 116.765 21.05 116.296C21.0073 115.784 20.8367 115.272 20.538 114.76C20.2393 114.248 19.7913 113.779 19.194 113.352C18.5967 112.883 17.7433 112.52 16.634 112.264L10.49 110.728C9.082 110.387 7.93 109.939 7.034 109.384C6.138 108.829 5.434 108.232 4.922 107.592C4.41 106.909 4.04733 106.205 3.834 105.48C3.62067 104.712 3.514 103.944 3.514 103.176C3.514 100.573 4.474 98.504 6.394 96.968C8.35667 95.3893 10.9593 94.6 14.202 94.6C15.866 94.6 17.658 94.8347 19.578 95.304C21.498 95.7307 23.1193 96.3707 24.442 97.224L23.226 101.064C22.3727 100.339 21.0927 99.6773 19.386 99.08C17.722 98.4827 15.8873 98.184 13.882 98.184ZM129.462 105.928L142.006 125H136.886L126.326 109L121.91 113.416V125H117.43V77.64H121.91V107.976L134.838 95.56H139.958L129.462 105.928Z"
        fill="#5688C3"
      />
    </svg>
  );
}
