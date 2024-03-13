const useSlugGenerator = (title) => {
  const slug = title.replace(/\s/g, "-").toLowerCase();
  return slug;
};

export default useSlugGenerator;
