export default function ProductFields({ form, setForm }) {
  function update(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value
    }));
  }

  return (
    <>
      <label>
        Nombre
        <input
          value={form.nombre}
          onChange={(e) => update("nombre", e.target.value)}
          required
        />
      </label>

      <label>
        Descripción
        <textarea
          value={form.descripcion}
          onChange={(e) => update("descripcion", e.target.value)}
          required
        />
      </label>

      <div className="form-grid">
        <label>
          Precio
          <input
            type="number"
            step="0.01"
            min="0"
            value={form.precio}
            onChange={(e) => update("precio", e.target.value)}
            required
          />
        </label>

        <label>
          Categoría
          <select
            value={form.categoria}
            onChange={(e) => update("categoria", e.target.value)}
          >
            <option>Pan</option>
            <option>Dulce</option>
            <option>Salado</option>
            <option>Temporada</option>
          </select>
        </label>
      </div>

      <label>
        Ingredientes
        <input
          value={form.ingredientes}
          onChange={(e) => update("ingredientes", e.target.value)}
          placeholder="Harina, agua, sal..."
        />
      </label>

      <label>
        URL de imagen
        <input
          value={form.imagen}
          onChange={(e) => update("imagen", e.target.value)}
        />
      </label>

      <label className="check">
        <input
          type="checkbox"
          checked={form.disponible}
          onChange={(e) => update("disponible", e.target.checked)}
        />
        Disponible
      </label>

      <label className="check">
        <input
          type="checkbox"
          checked={form.destacado}
          onChange={(e) => update("destacado", e.target.checked)}
        />
        Producto destacado
      </label>
    </>
  );
}
