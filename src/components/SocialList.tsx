import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import LinkedIn from "../assets/linkedin-alt.svg";
import Dribbble from "../assets/dribbble-alt.svg";
import {config} from "../lib/config";

export function SocialList({}) {
  return (
    <div>

      {/* GitHub */}
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="nofollow noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>

      {/* Twitter */}
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="nofollow noopener"
      >
        <Twitter width={24} height={24} fill={"#222"} />
      </a>

      {/* LinkedIn */}
      <a
        title="LinkedIn"
        href={`https://linkedin.com/in/${config.linkedin_account}`}
        target="_blank"
        rel="nofollow noopener"
      >
        <LinkedIn width={24} height={24} fill={"#222"} />
      </a>

      {/* Dribbble */}
      <a
        title="Dribbble"
        href={`https://dribble.com/${config.dribbble_account}`}
        target="_blank"
        rel="nofollow noopener"
      >
        <Dribbble width={24} height={24} fill={"#222"} />
      </a>



      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
