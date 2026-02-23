export default function Logo() {
  return (
    <>
      <div>
        <svg width="32" height="32">
          <use href={`${import.meta.env.BASE_URL}sprite.svg#icon-logo`} />
        </svg>
        Bookshelf
      </div>
    </>
  );
}
