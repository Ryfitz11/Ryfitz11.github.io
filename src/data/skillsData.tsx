import React from 'react';
import { SiSolidity, SiWeb3Dotjs, SiIpfs } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHardHat, FaReact } from "react-icons/fa";

export const skills = [
  {
    name: 'React',
    icon: <FaReact />,
    description: 'Building responsive and interactive user interfaces'
  },
  {
    name: 'Solidity',
    icon: <SiSolidity />,
    description: 'Smart contract development for Ethereum'
  },
  {
    name: 'Web3.js',
    icon: <SiWeb3Dotjs />,
    description: 'Connecting frontends to blockchain networks'
  },
  {
    name: 'JavaScript',
    icon: <RiJavascriptFill />,
    description: 'Advanced proficiency with modern ES6+ features'
  },
  {
    name: 'Hardhat',
    icon: <FaHardHat />,
    description: 'Development environment for Ethereum'
  },
  {
    name: 'IPFS',
    icon: <SiIpfs />,
    description: 'Decentralized storage solutions'
  }
];