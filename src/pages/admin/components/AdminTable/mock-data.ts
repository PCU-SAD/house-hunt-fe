export interface UserData {
  id: string
  status: string
  email: string
}

export type PaginatedResponse = {
  data?: UserData[]
  total?: number
}

export async function fakePaginationResponse(
  pageSize: number,
  currentPage: number
): Promise<PaginatedResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (Math.random() > 0.4) {
    throw new Error('Server error')
  }

  const userData: UserData[] = new Array(30_011).fill(null).map((_, index) => ({
    id: index.toString(),
    status: Math.random() > 0.45 === 0 ? 'Active' : 'Inactive',
    email: `email-number-${index + 1}@email.com`
  }))

  // Calculate start and end index
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, userData.length)

  // Slice data based on pagination
  const paginatedData = userData.slice(startIndex, endIndex)

  return {
    data: paginatedData,
    total: userData.length
  }
}
