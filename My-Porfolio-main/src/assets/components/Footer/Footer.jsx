import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-[#12141e] pt-12'>
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 mb-6 text-white font-[600] md:text-[2rem]'>
              Want to give me an opportunity?
            </h2>
            <a href='#contact'>
            <button className='flex items-center gap-2 text-white font-[600] border border-solid
            border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white
            hover:font-[500] ease-in duration-100'>
              {/* <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 */}
              {/* hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'> */}
                <i class='ri-mail-line'></i>
                Hire me
              </button>
            </a>
          </div>

          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0 text-[20px]'>
              "I’m not a great programmer; I’m just a good programmer with great habits."
            </p>

            <div className='flex items-center gap-4 flex-wrap md:gap-8'>
            <span className='text-gray-300 mt-1 text-[20px] font-[600]'>Connect</span>
              <span><a title='instagram' target='_blank' href='https://www.instagram.com/vishranth__/' className='text-gray-300 mt-8 font-[600] text-[20px]'><i class="ri-instagram-fill"></i></a></span>
              <span><a  title='github' target='_blank' href='https://github.com/viz-zie' className='text-gray-300 mt-8 font-[600] text-[20px]'><i class='ri-github-line'></i></a></span>
              <span><a title='LinkedIn' target='_blank' href='https://www.linkedin.com/in/vishranth-karthikheyan-5b63b0227/' className='text-gray-300 mt-8 font-[600] text-[20px]'><i class='ri-linkedin-box-fill'></i></a></span>
            </div>
          </div>
        </div>
      </div>

      {/* perosnal footer branding */}
      <div className='bg-[#1b1e29] py-3 mt-14'>
        <div className='container'>
          <div className='flex items-center justify-center sm:justify-between'>
            <div className='hidden sm:block'>
              <div className='flex items-center gap-[10px]'>
                <span className='w-[35px] h-[35px]  bg-white text-black text-[18px] font-[500]
                     rounded-full flex items-center justify-center'>V</span>

                <div className='leading-[20px]'>
                  <h2 className='text-xl text-white font-[700]'>Vishranth Karthikheyan</h2>
                </div>
              </div>
            </div>
            <div>
              <p className='text-gray-400 text-[14px]'>Copyright &copy; {year} <br /><b>Vishranth Karthikheyan</b> </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;