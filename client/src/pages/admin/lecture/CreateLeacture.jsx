import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateLectureMutation, useGetCourseLectureQuery } from "@/features/api/courseApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import Lecture from "./Lecture";

const CreateLeacture = () => {
  const [lectureTitle, setLectureTitle] = useState("");



  const params = useParams();
  const courseId = params.courseId;



  const navigate = useNavigate();


  const [createLecture, { data, isLoading, isSuccess, error }] =
    useCreateLectureMutation();

    const {data:lectureData , isLoading:lectureLoading , isError: lectureError,refetch} = useGetCourseLectureQuery(courseId);

  const createLectureHandler = async () => {
    await createLecture({ lectureTitle, courseId });

  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      refetch();
    }
    if (error) {
      toast.error(error.data.message);
    }
  }, [isSuccess, error]);

  return (
    <div className="flex-1 mx-10 ">
      <div className="mb-4">
        <h1 className="font-bold text-xl">
          Lets add Lecture, add some basic course details for your new course{" "}
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus, tempora.
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            name="courseTitle"
            value={lectureTitle}
            onChange={(e) => setLectureTitle(e.target.value)}
            placeholder="Your Tittle name"
          />
        </div>

        <div className="flex item-center gap-2">
          <Button variant="outline" onClick={() => navigate(`/admin/course/${courseId}`)}>
            Back to Course
          </Button>
          <Button disable={isLoading} onClick={createLectureHandler}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait
              </>
            ) : (
              "Create lecture"
            )}
          </Button>
        </div>
        <div>
     {
        lectureLoading ? (<p> Loading Lecture...</p>) : 
        lectureError ? (
            <p>Failed to load lectures.</p>
          ) :  lectureData.lectures.length === 0 ? (
            <p>No lectures availabe</p>
          ) : (
            lectureData.lectures.map((lecture, index) => (
              <Lecture
                key={lecture._id}
                lecture={lecture}
                courseId={courseId}
                index={index}
              />
            ))
       )}
        
        </div>
      </div>
    </div>
  );
};

export default CreateLeacture;
