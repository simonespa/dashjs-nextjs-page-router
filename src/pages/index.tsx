import ProgrammeMetadata from "@/ui/programme-metadata";
import AudioPlayer from "@/ui/audio-player";
import RadioStationsList from "@/ui/radio-stations-list";

export default function Player() {
  return (
    <div className="bg-gray-100 p-4 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <ProgrammeMetadata
          id="p0hfh58v"
          title="Going Home on Radio 1"
          description="Vick and Jamie soundtrack your journey home."
        />

        <AudioPlayer />

        <RadioStationsList
          radioStations={[
            {
              id: "bbc_radio_one",
              name: "BBC Radio 1",
              description: "The biggest new pop & all day vibes.",
            },
            {
              id: "bbc_1xtra",
              name: "BBC Radio 1Xtra",
              description: "The best in new black music.",
            },
            {
              id: "bbc_radio_two",
              name: "BBC Radio 2",
              description: "The best music mix.",
            },
            {
              id: "bbc_radio_three",
              name: "BBC Radio 3",
              description: "Classical music and culture.",
            },
            {
              id: "bbc_radio_four",
              name: "BBC Radio 4",
              description: "Intelligent speech and drama.",
            },
            {
              id: "bbc_radio_five_live",
              name: "BBC Radio 5 Live",
              description: "Breaking news and live sport.",
            }
          ]}
        />
      </div>
    </div>
  );
}
