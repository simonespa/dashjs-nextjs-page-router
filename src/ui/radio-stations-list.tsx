import Image from "next/image";

interface Props {
  id: string;
  name: string;
  description: string;
}

const LOGO_URL =
  "https://sounds.files.bbci.co.uk/3.8.0/networks/{ID}/colour_default.svg";

export default function RadioStationsList({
  radioStations,
}: {
  radioStations: Props[];
}) {
  return (
    <div className="flex flex-col p-5">
      <div className="border-b pb-1 flex justify-between items-center mb-2">
        <span className=" text-base font-semibold uppercase text-gray-700">
          Radio Stations
        </span>
      </div>

      <div className="h-32 overflow-y-auto">
        {radioStations.map((radioStation) => {
          return (
            <div
              key={radioStation.id}
              className="flex border-b py-3 cursor-pointer hover:shadow-md px-2 "
            >
              <Image
                width={40}
                height={40}
                alt={radioStation.name}
                src={LOGO_URL.replace("{ID}", radioStation.id)}
                className="w-10 h-10 object-cover rounded-lg"
              />
              <div className="flex flex-col px-2 w-full">
                <span className="text-sm text-red-500 capitalize font-semibold pt-1">
                  {radioStation.name}
                </span>
                <span className="text-xs text-gray-500 uppercase font-medium ">
                  {radioStation.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
