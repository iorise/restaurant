export default function Contact() {
  return (
    <div className="relative">
      <div className="h-full background-contact">
        
      </div>
      <div className="content-contact mt-96 inset-0 justify-center items-center text-main-cardFont text-xl">
          <div className="bg-contact bg-main-secondary bg-opacity-10 w-full h-1/2 pb-12 flex flex-col pl-5 pr-5 rounded-lg items-center h-screen">
            <div className="card rounded-lg mt-16 flex bg-main-bgMain bg-opacity-90 text-center items-center w-1/2">
              <img src="/images/stickereula.png" alt="" />
              <p>Eula Lawrence</p>
            </div>
            <div className="card rounded-lg mt-16 flex bg-main-bgMain bg-opacity-90 text-center items-center  w-1/2">
              <img className="w-44" src="/images/ambersticker.png" alt="" />
              <p className="ml-7">The Outrider Amber</p>
            </div>
          </div>
      </div>
    </div>
  );
}
