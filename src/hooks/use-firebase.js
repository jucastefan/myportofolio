import { useState, useEffect, useCallback } from "react";

const useFirebase = () => {
  //States
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);
  const [isLoadingCertifications, setIsLoadingCertifications] = useState(false);
  const [isLoadingArticles, setIsLoadingArticles] = useState(false);
  const [error, setError] = useState(false);

  //Firebase API Requests
  const fetchedFirebase = useCallback(async () => {
    setIsLoadingProjects(true);
    setIsLoadingCertifications(true);
    setIsLoadingArticles(true);

    try {
      const loadedProjects = [];
      const loadedCertifications = [];
      const loadedArticles = [];

      const firebaseData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      };

      const dataProjects = await firebaseData(
        "https://myworkpotofolio-default-rtdb.europe-west1.firebasedatabase.app/projects.json"
      );

      const dataCertifications = await firebaseData(
        "https://myworkpotofolio-default-rtdb.europe-west1.firebasedatabase.app/certifications.json"
      );

      const dataArticles = await firebaseData(
        "https://myworkpotofolio-default-rtdb.europe-west1.firebasedatabase.app/articles.json"
      );

      const loadedContent = (data) => {
        for (const key in data) {
          if (data === dataProjects) {
            loadedProjects.push({
              id: Math.random(),
              title: data[key].title,
              img: data[key].img,
              github: data[key].github,
              web: data[key].web,
              description: data[key].description,
              type: data[key].type,
            });
          } else if (data === dataCertifications) {
            loadedCertifications.push({
              id: Math.random(),
              title: data[key].title,
              teacher: data[key].teacher,
              course: data[key].course,
              img: data[key].img,
            });
          } else if (data === dataArticles) {
            loadedArticles.push({
              id: Math.random(),
              title: data[key].title,
              text: data[key].text,
              data: data[key].data,
            });
          }
        }
      };

      loadedContent(dataProjects);
      loadedContent(dataCertifications);
      loadedContent(dataArticles);

      setTimeout(() => {
        setProjects(loadedProjects);
        setCertifications(loadedCertifications);
        setArticles(loadedArticles);
        setIsLoadingProjects(false);
        setIsLoadingCertifications(false);
        setIsLoadingArticles(false);
      }, 300);
    } catch (err) {
      if (err) {
        setError(true);
      }
    }
  }, []);

  useEffect(() => {
    fetchedFirebase();
  }, [fetchedFirebase]);

  return {
    error,
    projects,
    certifications,
    articles,
    isLoadingProjects,
    isLoadingCertifications,
    isLoadingArticles,
  };
};

export default useFirebase;
