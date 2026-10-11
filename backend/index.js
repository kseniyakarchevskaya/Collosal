import express from 'express';
import cors from 'cors';
import pg from 'pg';

const { Pool } = pg;

const app = express();

const PORT = 3003;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    //host: '192.168.125.7',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
});
app.get('/landing-pages', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM landing_pages ORDER BY display_order ASC');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'database error' });
    }
});
app.get('/pricing-plans', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT 
                id, 
                title, 
                price, 
                feature_1, 
                feature_2, 
                feature_3, 
                feature_4 
             FROM pricing_plans 
             ORDER BY display_order ASC`
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'database error',
        });
    }
});
app.get('/testimonials1', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT 
                id, 
                name, 
                company, 
                review_text, 
                avatar_url 
             FROM testimonials1 
             WHERE is_active = TRUE 
             ORDER BY id`
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'database error' });
    }
});
app.get('/project-details', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM project_details ORDER BY id ASC');
        res.json(result.rows); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'database error' });
    }
});
app.get('/terms', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM terms_sections ORDER BY display_order ASC');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'database error' });
    }
});
app.get('/stats', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM stats ORDER BY display_order ASC');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'database error' });
    }
});
app.get('/company-team', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, name, title, image_url FROM company_team ORDER BY display_order ASC');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'database error' });
    }
});
app.get('/company-blogs', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM company_blogs ORDER BY display_order ASC');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'database error' });
    }
});
app.get('/blog-detail-page/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM blog_detail_page WHERE blog_id = $1', [id]);
        
        res.json(result.rows); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при получении страницы статьи' });
    }
});
app.get('/related-blogs', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM related_blogs ORDER BY display_order ASC');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при получении списка похожих статей' });
    }
});
app.get('/blog-posts/:id/responses', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            'SELECT * FROM blog_responses WHERE post_id = \$1 ORDER BY display_order ASC',
            [id]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при получении комментариев' });
    }
});


app.post('/blog-posts/:id/responses', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, comment } = req.body;

        const result = await pool.query(
            `INSERT INTO blog_responses 
             (post_id, author_name, author_avatar, published_time, response_text)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING id, author_name, author_avatar, published_time, response_text`,
            [id, name, 'fac', 'Just now', comment]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при сохранении комментария' });
    }
});

app.get('/company-faq', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, question, answer FROM company_faq ORDER BY display_order ASC');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при получении списка FAQ' });
    }
});
app.get('/company-faq-accordion', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM company_faq_accordion ORDER BY display_order ASC');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при получении FAQ аккордеона' });
    }
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
