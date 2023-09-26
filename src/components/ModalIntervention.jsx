import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    IconButton,
    Tooltip,
    Typography,
} from "@material-tailwind/react";
import { FaRegTimesCircle, FaBed, FaFire, FaPercent, FaDownload } from 'react-icons/fa'; // Importing icons from react-icons

function DialogDefault({ setopen, open, intervention }) {
    return (
        <Card className={`w-full shadow-lg ${!open ? "hidden" : ""}`}>
            <CardHeader floated={false} color="blue-gray">
                <div className="relative">
                    <img src={intervention && intervention.responsavel} alt="Responsavel" />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    <IconButton
                        size="sm"
                        color="red"
                        variant="text"
                        className="!absolute top-0 right-0 rounded-full"
                        onClick={() => setopen(!open)}
                    >
                        <FaRegTimesCircle className="h-6 w-6" /> {/* React icon */}
                    </IconButton>
                </div>
            </CardHeader>
            <CardBody>
                <div className="mb-3 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray" className="font-medium">
                        {intervention && intervention.tag} - {intervention && intervention.PJ}
                    </Typography>
                    <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-bold"
                    >
                        {intervention && intervention.avanco_atual}<FaPercent />
                      
                    </Typography>
                </div>
                <Typography color="gray">
                    {intervention && intervention.emperesa_montagem}
                </Typography>
                <Typography color="gray">
                    Inicio Real e Término: {intervention && intervention.inicio_real} - {intervention && intervention.termino_real}
                </Typography>
                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                    <Tooltip content="$129 per night">
                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            <FaDownload className="h-5 w-5" /> {/* React icon */}
                        </span>
                    </Tooltip>
                    <Tooltip content="Fire alert">
                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            <FaFire className="h-5 w-5" /> {/* React icon */}
                        </span>
                    </Tooltip>
                </div>
            </CardBody>
        </Card>
    )
}

export default DialogDefault;
