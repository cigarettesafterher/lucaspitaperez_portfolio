import Link from 'next/link';

function Header() {
  // eslint-disable-next-line no-extra-semi
  ;

  return (
    <div className="hidden md:block container mx-auto px-10 mb-2">
      <div className="border-b w-full inline-block border-white py-8">
        <div className="md:float-left block ">
          <Link href="/">
            <span className="hidden md:block cursor-pointer font-regular text-xs text-black">
              <div> Looks like you have made it to my corner of the internet.
              </div>
              <div>
                This website is being updated incrementally.
              </div>
              <div>
                Thanks for stopping by.
              </div>
            </span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <span className=" pl-5 md:float-right cursor-pointer font-regular text-xs text-black">
              <div>resume
              </div>
            </span>

          </Link>
        </div>
        <div>
          <Link href="/">
            <span className=" pl-5 md:float-right cursor-pointer font-regular text-xs text-black">
              <div> proyects
              </div>
            </span>

          </Link>
        </div>

      </div>

    </div>

  );
}

export default Header;
