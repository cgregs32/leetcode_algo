def judge_circle(moves)
  h = Hash.new(0)
  moves.chars.map { |move| h[move] += 1 }
  h['U'] - h['D'] == 0 && h['L'] - h['R'] == 0
end

moves = "UDLRUDLRRRLR"
p judge_circle(moves)