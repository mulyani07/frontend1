import React, { useState, useEffect } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useNavigate, useParams } from 'react-router-dom'
import { Loader2, ChevronLeft, ArrowLeft } from 'lucide-react'

const JobSetup = () => {
  const { jobId } = useParams()
  const navigate = useNavigate()
  const { companies } = useSelector(store => store.company)

  const [input, setInput] = useState({
    title: '',
    description: '',
    requirements: '',
    salary: '',
    location: '',
    jobType: '',
    experienceLevel: '',
    position: 0,
    companyId: ''
  })
  const [loading, setLoading] = useState(false)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (!jobId) return
    const fetchJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true })
        const job = res.data.job
        setInput({
          title: job.title,
          description: job.description,
          requirements: job.requirements,
          salary: job.salary,
          location: job.location,
          jobType: job.jobType,
          experienceLevel: job.experienceLevel,
          position: job.position,
          companyId: job.company._id
        })
      } catch (error) {
        toast.error('Failed to load job data')
      } finally {
        setLoadingData(false)
      }
    }
    fetchJob()
  }, [jobId])

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const selectChangeHandler = (value, field) => {
    setInput({ ...input, [field]: value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.put(
        `${JOB_API_END_POINT}/update/${jobId}`,
        input,
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
      )
      if (res.data.success) {
        toast.success('Job updated successfully')
        navigate('/admin/jobs')
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update job')
    } finally {
      setLoading(false)
    }
  }

  if (loadingData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-purple-700" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center px-4 py-8">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-4xl bg-white p-8 rounded-md shadow-md border border-gray-200"
        >
          <div className="flex items-center mb-6 space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/admin/jobs')}
              className="flex items-center gap-1 text-sm cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <h1 className="font-extrabold text-3xl text-[#6300B3] tracking-wide select-none">Job Setup</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Job Title</Label>
              <Input
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Description</Label>
              <textarea
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                rows={6}
                className="w-full p-2 border rounded-md border-gray-300 resize-none text-sm text-gray-600"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Requirements</Label>
              <Input
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
              />
            </div>

            <div className="space-y-2">
              <Label>Salary</Label>
              <Input
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
              />
            </div>

            <div className="space-y-2">
              <Label>Location</Label>
              <Input
                name="location"
                value={input.location}
                onChange={changeEventHandler}
              />
            </div>

            <div className="space-y-2">
              <Label>Job Type</Label>
              <Select
                value={input.jobType}
                onValueChange={(value) => selectChangeHandler(value, 'jobType')}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Full Time">Full Time</SelectItem>
                    <SelectItem value="Part Time">Part Time</SelectItem>
                    <SelectItem value="Freelance">Freelance</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Experience Level</Label>
              <Input
                type='number'
                name="experienceLevel"
                value={input.experienceLevel}
                onChange={changeEventHandler}
              />
            </div>

            <div className="space-y-2">
              <Label>No. of Positions</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
              />
            </div>

            {companies.length > 0 && (
              <div className="space-y-2 md:col-span-2">
                <Label>Select Company</Label>
                <Select
                  value={companies.find(c => c._id === input.companyId)?.name.toLowerCase() || ""}
                  onValueChange={(value) => {
                    const selectedCompany = companies.find(c => c.name.toLowerCase() === value)
                    selectChangeHandler(selectedCompany?._id || "", 'companyId')
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {companies.map(company => (
                        <SelectItem key={company._id} value={company.name.toLowerCase()}>
                          {company.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div className="mt-8">
            <Button
              type="submit"
              className="w-full bg-[#6300B3] hover:bg-[#5b30a6] text-white cursor-pointer"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Job"
              )}
            </Button>
          </div>

          {companies.length === 0 && (
            <p className="text-sm text-center text-red-600 font-medium mt-4 ">
              *Please register a company first before editing job.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default JobSetup
