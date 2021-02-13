import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "Overview",
        path: "/overview",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: "Users",
                path: "/overview/users",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Revenue",
                path: "/overview/revenue",
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: "Reports",
                path: "/reports/report1",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Reports",
                path: "/reports/report2",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Reports",
                path: "/reports/report3",
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: "Team",
        path: "/team",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
    },
]