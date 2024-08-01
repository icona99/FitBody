import { useEffect, useState } from "react";
import classesAPI from "../api/classesAPI";

export function useCreateClass() {

    const classCreateHandler = (classData) => classesAPI.create(classData)

    return classCreateHandler;
}

export function useGetOneClass(classId) {
    const [classData, setClassData] = useState({
      title: '',
      image: '',
      level: '',
      description: '',
    });
  
    useEffect(() => {
      (async () => {
        try {
          const result = await classesAPI.getOne(classId);
          setClassData(result);
        } catch (error) {
          console.error('Error fetching class data:', error);
        }
      })();
    }, [classId]);
   
    return [classData, setClassData];
  }