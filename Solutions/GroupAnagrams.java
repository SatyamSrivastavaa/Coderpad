public class GroupAnagrams
{

	public static void main(String[] args)
	{
		getGroupAnagrams(new StringReader("abc bac cat dog tac god mcs"))
		.forEach(System.out::println);
	}
}