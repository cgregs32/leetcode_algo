def gradingStudents(grades)
  return grades.map do |grade|
    next grade if grade < 38
    next grade if (grade % 5) < 3
    rounded = grade.round(-1)
    rounded > grade ? rounded : rounded + 5
  end
end

grades = [73,67,38,33]
p gradingStudents(grades)