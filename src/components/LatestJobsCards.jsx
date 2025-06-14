import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobsCards = ({ job }) => {
  const navigate = useNavigate()
  
  // Batasi deskripsi maksimal 100 karakter untuk preview
  const previewLength = 100
  const previewDescription =
    job?.description.length > previewLength
      ? job.description.slice(0, previewLength) + "..."
      : job.description

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer"
    >
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <h1 className="text-sm text-gray-500">{job?.company?.location}</h1>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{previewDescription}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={'text-blue-700 font-bold'} variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={'text-[#6300B3] font-bold'} variant="ghost">
          ${job?.salary}
        </Badge>
      </div>
    </div>
  )
}

export default LatestJobsCards
