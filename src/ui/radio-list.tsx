import { SyntheticEvent } from "react";

const radioStations = [
  { id: "bbc_radio_one", label: "BBC Radio 1" },
  { id: "bbc_radio_one_anthems", label: "BBC Radio 1 Anthems" },
  { id: "bbc_radio_one_dance", label: "BBC Radio 1 Dance" },
  { id: "bbc_1xtra", label: "BBC Radio 1Xtra" },
  { id: "bbc_radio_two", label: "BBC Radio 2" },
  { id: "bbc_6music", label: "BBC Radio 6 Music" },
  { id: "bbc_london", label: "BBC Radio London" },
  { id: "bbc_world_service", label: "BBC World Service" },
  { id: "bbc_sounds_news", label: "BBC Live News" },
];

export default function RadioList({
  onClick,
}: {
  onClick: (e: SyntheticEvent) => void;
}) {
  return (
    <ul id="radio-list" role="list" onClick={onClick}>
      {radioStations.map((station) => (
        <li key={station.id} role="listitem">
          <a
            data-id={station.id}
            href="#"
            aria-label={station.label}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick(e);
              }
            }}
          >
            {station.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
