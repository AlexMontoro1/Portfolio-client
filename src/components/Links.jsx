import { FaLinkedin, FaGithub, FaMailBulk, FaFileAlt } from "react-icons/fa";

import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";

function Links() {
  const handleCvDownload = () => {
    fetch("/CV - Alejandro Montoro (2023).pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "CV - Alejandro Montoro (2023).pdf";
        a.click();
        URL.revokeObjectURL(url);
      });
  };

  return (
    <div className="circleMenu">
      <CircleMenu
        startAngle={-90}
        rotationAngle={360}
        itemSize={2}
        radius={5}
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/alejandro-montoro-jimenez/",
              "_blank"
            )
          }
          tooltip="Linkedin"
          tooltipPlacement={TooltipPlacement.Right}
        >
          <FaLinkedin size={32} />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() =>
            window.open("https://github.com/AlexMontoro1", "_blank")
          }
          tooltip="Github"
        >
          <FaGithub size={32} />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => window.open("mailto:alejandro.montoro95@gmail.com")}
          tooltip="Contact"
        >
          <FaMailBulk size={32} />
        </CircleMenuItem>
        <CircleMenuItem onClick={handleCvDownload} tooltip="Cv">
          <FaFileAlt size={32} />
        </CircleMenuItem>
      </CircleMenu>
    </div>
  );
}

export default Links;
