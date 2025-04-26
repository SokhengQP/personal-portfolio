import LocationFinder from "../others/LocationFinder";

export default function Contact() {
    return (
        <>
        <div className="grid grid-cols-1 rounded-3xl w-full overflow-clip bg-[#202022] p-8 gap-8">
            <div className="">
                <iframe className="w-full rounded-xl grayscale brightness-75" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.507!2d-122.349264!3d47.620506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f73a115b7%3A0x7e1c3e131f36834b!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus" height={400} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <LocationFinder />
        </div>

        </>
    )
}