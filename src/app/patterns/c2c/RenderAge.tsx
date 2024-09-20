"use client";
const RenderAge: React.FC<{ children: number }> = ({ children: age }) => (
  <strong
    style={{
      backgroundColor: `hsl(${(age * 250) % 20} 30% 50%)`,
    }}
  >
    {age}
  </strong>
);
export default RenderAge;
