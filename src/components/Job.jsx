import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({ job }) => {
    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }

    const previewLength = 90;
    const previewDescription = job?.description.length > previewLength
        ? job.description.slice(0, previewLength) + "..."
        : job.description;

    return (
        <div className='p-5 rounded-xl shadow-lg bg-white border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 duration-300'>
            <div className='flex items-center justify-between text-sm text-gray-500 mb-2'>
                <p>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center gap-4 my-2'>
                <Button className="p-6" variant="rounded-full" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>{job?.company?.location}</p>
                </div>
            </div>

            <div className='mt-2'>
                <h1 className='font-bold text-lg mb-1'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{previewDescription}</p>
            </div>

            <div className='flex flex-wrap gap-2 mt-4'>
                <Badge className='text-blue-700 font-bold' variant="ghost">{job?.position} Positions</Badge>
                <Badge className='text-[#F83002] font-bold' variant="ghost">{job?.jobType}</Badge>
                <Badge className='text-[#7209B7] font-bold' variant="ghost">${job?.salary}</Badge>
            </div>

            <div className='flex mt-4'>
                <Button
                    onClick={() => navigate(`/description/${job?._id}`)}
                    className="w-full bg-[#4B0082] text-white hover:bg-[#360061] transition-all font-medium rounded-lg cursor-pointer"
                >
                    Details
                </Button>
            </div>
        </div>
    )
}

export default Job;
