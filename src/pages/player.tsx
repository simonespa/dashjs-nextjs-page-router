import RadioStationsList from "@/ui/radio-stations-list";

export default function Player() {
  return (
    <div className="bg-gray-100 p-4 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        {/* <!-- Programme Image --> */}
        <img
          src="https://ichef.bbci.co.uk/images/ic/160x160/p0hfh58v.jpg.webp"
          alt="idk - Highvyn, Taylor Shin"
          className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"
        />
        {/* <!-- Programme Title --> */}
        <h2 className="text-xl font-semibold text-center">
          Going Home on Radio 1
        </h2>
        {/* <!-- Programme Description --> */}
        <p className="text-gray-600 text-sm text-center">
          Vick and Jamie soundtrack your journey home.
        </p>
        {/* <!-- Audio Player --> */}
        <div className="mt-6 flex justify-center items-center">
          <audio id="audio-player" controls></audio>
        </div>

        {/* <!-- Radio Stations --> */}
        <RadioStationsList radioStations={[
          {
            id: 'bbc_radio_one',
            name: 'BBC Radio 1',
            description: 'The biggest new pop & all day vibes.'
          }
        ]} />
      </div>
    </div>
  );
}
